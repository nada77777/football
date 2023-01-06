import { child, get, getDatabase, onValue, ref } from "firebase/database";

export class GetData {
    constructor(databaseURL) {
        // this.database = getDatabase(databaseURL);
        this.database = databaseURL;
    }

    async readStandingsAndClubListData() {
        console.log('read');
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

}

