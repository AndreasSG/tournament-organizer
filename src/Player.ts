/** Class representing a player. */
export class Player {

    /** Unique ID of the player. */
    id: string;

    /** Name of the player. */
    alias: string;

    /** 
     * Seed value for the player, if players are to be sorted.
     * @default 0
    */
    seed: number;

    /** 
     * Number of initial byes for a player in a Swiss tournament. 
     * @default 0
    */
    initialByes: number;

    /** 
     * If the player has received a pairing bye in a Swiss tournament.
     * @default false
    */
    pairingBye: boolean;

    /**
     * If the player has been paired up/down in a Swiss tournament.
     * @default false
     */
    pairUpDown: boolean;

    /** 
     * Number of matches played. 
     * @default 0
    */
    matchCount: number;

    /** 
     * Number of match points. 
     * @default 0
    */
    matchPoints: number;

    /** 
     * Number of games played. 
     * @default 0
    */
    gameCount: number;

    /** 
     * Number of game points. 
     * @default 0
    */
    gamePoints: number;

    /**
     * In-bracket sequence number, used for Swiss pairings. 
     * @default 0
    */
    bsn: number;

    /** 
     * If the player is actively in the tournament. 
     * @default true
    */
    active: boolean;

    /** 
     * Results from each match. 
     * @default []
    */
    results: {
        match: string,
        round: number,
        opponent: string,
        outcome: 'win' | 'loss' | 'draw' | 'bye',
        matchPoints: number,
        gamePoints: number,
        games: number
    }[];

    /** Tiebreaker values for Swiss and round-robin tournaments. 
     * @default {medianBuchholz: 0, solkoff: 0, sonnebornBerger: 0, cumulative: 0, oppCumulative: 0, matchWinPct: 0, oppMatchWinPct: 0, oppOppMatchWinPct: 0, gameWinPct: 0, oppGameWinPct: 0}
    */
    tiebreakers: {
        medianBuchholz: number,
        solkoff: number,
        sonnebornBerger: number,
        cumulative: number,
        oppCumulative: number,
        matchWinPct: number,
        oppMatchWinPct: number,
        oppOppMatchWinPct: number,
        gameWinPct: number,
        oppGameWinPct: number
    };

    constructor(opt: {
        id: string,
        alias: string,
        seed?: number,
        initialByes?: number
    }) {       
        
        // Default values
        let options = Object.assign({
            seed: 0,
            initialByes: 0
        }, opt);

        this.id = options.id;
        this.alias = options.alias;
        this.seed = options.seed;
        this.initialByes = options.initialByes;
        this.pairingBye = false;
        this.pairUpDown = false;
        this.matchCount = 0;
        this.matchPoints = 0;
        this.gameCount = 0;
        this.gamePoints = 0;
        this.active = true;
        this.bsn = 0;
        this.results = [];
        this.tiebreakers = {
            medianBuchholz: 0,
            solkoff: 0,
            sonnebornBerger: 0,
            cumulative: 0,
            oppCumulative: 0,
            matchWinPct: 0,
            oppMatchWinPct: 0,
            oppOppMatchWinPct: 0,
            gameWinPct: 0,
            oppGameWinPct: 0
        }
    }
}