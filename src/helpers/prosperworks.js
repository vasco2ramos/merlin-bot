
let getOpportunitiesCount = count => {

    count = count || 5;

    return new Promise((resolve, reject) => {
        var q = "SELECT Id, Name, Amount, Probability, StageName, CloseDate FROM Opportunity WHERE isClosed=false ORDER BY amount DESC LIMIT " + count;
        org.query({query: q}, (err, resp) => {
            if (err) {
                console.error(err);
                reject("An error as occurred");
            } else {
                resolve(resp.records);
            }
        });
    });

};
