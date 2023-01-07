import { child, get, getDatabase, ref } from "firebase/database";

export class GetData {
    constructor(databaseURL) {
        this.database = databaseURL;
    }

    async readStandingsAndClubListData() {
        const dbRef = ref(getDatabase());
        const resultItems = await get(child(dbRef, 'standings')).then((snapshot) => {
            if (snapshot.exists()) {
                const snapshotResult = snapshot.val().response[0].league.standings[0];
                return [snapshotResult,
                    snapshotResult.map((item) => ({ team: item.team, result: item.all, rank: item.rank, points: item.points }))];
            };
        });
        return resultItems;
    }

    async readTopScoreData() {
        const dbRef = ref(getDatabase());
        const resultItems = await get(child(dbRef, 'topScore')).then((snapshot) => {
            if (snapshot.exists()) {
                const snapshotResult = snapshot.val().response;
                return [snapshotResult.slice(0, 11), snapshotResult[0]];
            };
        });
        return resultItems;
    }

    async readClubInfoData() {
        const dbRef = ref(getDatabase());
        const resultItems = await get(child(dbRef, 'teams/teamsResult')).then((snapshot) => {
            if (snapshot.exists()) {
                const snapshotResult = snapshot.val().teams;
                return snapshotResult;
            };
        });
        return resultItems;

        // fetch('data/teams.json')//
        //         .then(result => result.json())//
        //         .then(result => setClubInfoItems(result.api.teams));
        //     console.log('club context');
    }


    async readSquadData(clubId) {
        const dbRef = ref(getDatabase());
        const resultItems = await get(child(dbRef, 'teamSquad')).then((snapshot) => {
            if (snapshot.exists()) {
                const snapshotResult = snapshot.val().filter((item) => item.response[0].team.id === clubId);
                // const snapshotResult = snapshot.val().map((item) => item);
                // console.log(snapshotResult[0].response[0].players);
                return snapshotResult[0].response[0].players;
            };
        });
        return resultItems;
    }

    async readInfoPageData(clubId) {
        const clubInfoItem = await this.readClubInfoData()//
            .then(clubInfoItems => clubInfoItems.filter((item) => item.team_id === clubId)[0]);

        const clubResultItems = await this.readStandingsAndClubListData()//
            .then(clubResultItems => clubResultItems[1].filter((item) => (item.team.id === clubId))[0]);


        const clubSquad = await this.readSquadData(clubId)//
            .then(clubSquad => clubSquad);

        return { clubInfoItem, clubResultItems, clubSquad };
    }

}

