const issues = [
    {
        "text": "Select Issue Number",
        "link": "#"
    },
    {
        "text": "Issue#60",
        "link": "index.html"
    },
    {
        "text": "Issue#59",
        "link": "issue_59.html"
    },
    {
        "text": "Issue#58",
        "link": "issue_58.html"
    },
    {
        "text": "Issue#57",
        "link": "issue_57.html"
    },
    {
        "text": "Issue#56",
        "link": "issue_56.html"
    },
    {
        "text": "Issue#55",
        "link": "issue_55.html"
    },
    {
        "text": "Issue#54",
        "link": "issue_54.html"
    },
    {
        "text": "Issue#53",
        "link": "issue_53.html"
    },
    {
        "text": "Issue#52",
        "link": "issue_52.html"
    },
    {
        "text": "Issue#51",
        "link": "issue_51.html"
    },
    {
        "text": "Issue#50",
        "link": "issue_50.html"
    },
    {
        "text": "Issue#49",
        "link": "issue_49.html"
    },
    {
        "text": "Issue#48",
        "link": "issue_48.html"
    },
    {
        "text": "Issue#47",
        "link": "issue_47.html"
    },
    {
        "text": "Issue#46",
        "link": "issue_46.html"
    },
    {
        "text": "Issue#45",
        "link": "issue_45.html"
    },
    {
        "text": "Issue#44",
        "link": "issue_44.html"
    },
    {
        "text": "Issue#43",
        "link": "issue_43.html"
    },
    {
        "text": "Issue#42",
        "link": "issue_42.html"
    },
    {
        "text": "Issue#41",
        "link": "issue_41.html"
    },
    {
        "text": "Issue#40",
        "link": "issue_40.html"
    },
    {
        "text": "Issue#39",
        "link": "issue_39.html"
    },
    {
        "text": "Issue#38",
        "link": "issue_38.html"
    },
    {
        "text": "Issue#37",
        "link": "issue_37.html"
    },
    {
        "text": "Issue#36",
        "link": "issue_36.html"
    },
    {
        "text": "Issue#35",
        "link": "issue_35.html"
    },
    {
        "text": "Issue#34",
        "link": "issue_34.html"
    },
    {
        "text": "Issue#33",
        "link": "issue_33.html"
    },
    {
        "text": "Issue#32",
        "link": "issue_32.html"
    },
     {
         "text": "Issue#31",
         "link": "issue_31.html"
     },
    {
        "text": "Issue#30",
        "link": "issue_30.html"
    },
    {
        "text": "Issue#29",
        "link": "issue_29.html"
    },
    {
        "text": "Issue#28",
        "link": "issue_28.html"
    },
    {
        "text": "Issue#27",
        "link": "issue_27.html"
    },
    {
        "text": "Issue#26",
        "link": "issue_26.html"
    },
    {
        "text": "Issue#25",
        "link": "issue_25.html"
    },
    {
        "text": "Issue#24",
        "link": "issue_24.html"
    },
    {
        "text": "Issue#23",
        "link": "issue_23.html"
    },
    {
        "text": "Issue#22",
        "link": "issue_22.html"
    },
    {
        "text": "Issue#21",
        "link": "issue_21.html"
    },
    {
        "text": "Issue#20",
        "link": "issue_20.html"
    },
    {
        "text": "Issue#19",
        "link": "issue_19.html"
    },
    {
        "text": "Issue#18",
        "link": "issue_18.html"
    },
    {
        "text": "Issue#17",
        "link": "issue_7.html"
    },
    {
        "text": "Issue#16",
        "link": "issue_16.html"
    },
    {
        "text": "Issue#15",
        "link": "issue_15.html"
    },
    {
        "text": "Issue#14",
        "link": "issue_14.html"
    },
    {
        "text": "Issue#13",
        "link": "issue_13.html"
    },
    {
        "text": "Issue#12",
        "link": "issue_12.html"
    },
    {
        "text": "Issue#11",
        "link": "issue_11.html"
    },
    {
        "text": "Issue#10",
        "link": "issue_10.html"
    },
    {
        "text": "Issue#9",
        "link": "issue_9.html"
    },
    {
        "text": "Issue#8",
        "link": "issue_8.html"
    },
    {
        "text": "Issue#7",
        "link": "issue_7.html"
    },
    {
        "text": "Issue#6",
        "link": "issue_6.html"
    },
    {
        "text": "Issue#5",
        "link": "issue_5.html"
    },
    {
        "text": "Issue#4",
        "link": "issue_4.html"
    },
    {
        "text": "Issue#3",
        "link": "issue_3.html"
    },
    {
        "text": "Issue#2",
        "link": "issue_2.html"
    },
    {
        "text": "Issue#1",
        "link": "issue_1.html"
    }
];

function buildIssueOptions() {
    let options = '';
    issues.map(issue => {
        options += `<option value="${issue.link}">${issue.text}</option>`;
    });
    $('#dynamic_select').empty().append(options);
}
