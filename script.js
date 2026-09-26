const jogos = [
    {
        "data": "11/06/2026",
        "time1": "México",
        "time2": "África do Sul",
        "score1": 2,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "11/06/2026",
        "time1": "Coreia do Sul",
        "time2": "Tchéquia",
        "score1": 2,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "12/06/2026",
        "time1": "Canadá",
        "time2": "Bósnia e Herzegovina",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "12/06/2026",
        "time1": "EUA",
        "time2": "Paraguai",
        "score1": 4,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "13/06/2026",
        "time1": "Haiti",
        "time2": "Escócia",
        "score1": 0,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "13/06/2026",
        "time1": "Austrália",
        "time2": "Turquia",
        "score1": 2,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "13/06/2026",
        "time1": "Brasil",
        "time2": "Marrocos",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "13/06/2026",
        "time1": "Catar",
        "time2": "Suíça",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "14/06/2026",
        "time1": "Costa do Marfim",
        "time2": "Equador",
        "score1": 1,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "14/06/2026",
        "time1": "Alemanha",
        "time2": "Curaçau",
        "score1": 7,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "14/06/2026",
        "time1": "Holanda",
        "time2": "Japão",
        "score1": 2,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "14/06/2026",
        "time1": "Suécia",
        "time2": "Tunísia",
        "score1": 5,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "15/06/2026",
        "time1": "Arábia Saudita",
        "time2": "Uruguai",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "15/06/2026",
        "time1": "Espanha",
        "time2": "Cabo Verde",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "15/06/2026",
        "time1": "Irã",
        "time2": "Nova Zelândia",
        "score1": 2,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "15/06/2026",
        "time1": "Bélgica",
        "time2": "Egito",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "16/06/2026",
        "time1": "França",
        "time2": "Senegal",
        "score1": 3,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "16/06/2026",
        "time1": "Iraque",
        "time2": "Noruega",
        "score1": 1,
        "score2": 4,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "16/06/2026",
        "time1": "Argentina",
        "time2": "Argélia",
        "score1": 3,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "16/06/2026",
        "time1": "Áustria",
        "time2": "Jordânia",
        "score1": 3,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "17/06/2026",
        "time1": "Gana",
        "time2": "Panamá",
        "score1": 1,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "17/06/2026",
        "time1": "Inglaterra",
        "time2": "Croácia",
        "score1": 4,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "17/06/2026",
        "time1": "Portugal",
        "time2": "RD Congo",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "17/06/2026",
        "time1": "Uzbequistão",
        "time2": "Colômbia",
        "score1": 1,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "18/06/2026",
        "time1": "Tchéquia",
        "time2": "África do Sul",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "18/06/2026",
        "time1": "Suíça",
        "time2": "Bósnia e Herzegovina",
        "score1": 4,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "18/06/2026",
        "time1": "Canadá",
        "time2": "Catar",
        "score1": 6,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "18/06/2026",
        "time1": "México",
        "time2": "Coreia do Sul",
        "score1": 1,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "19/06/2026",
        "time1": "Brasil",
        "time2": "Haiti",
        "score1": 3,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "19/06/2026",
        "time1": "Escócia",
        "time2": "Marrocos",
        "score1": 0,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "19/06/2026",
        "time1": "Turquia",
        "time2": "Paraguai",
        "score1": 0,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "19/06/2026",
        "time1": "EUA",
        "time2": "Austrália",
        "score1": 2,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "20/06/2026",
        "time1": "Alemanha",
        "time2": "Costa do Marfim",
        "score1": 2,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "20/06/2026",
        "time1": "Equador",
        "time2": "Curaçau",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "20/06/2026",
        "time1": "Holanda",
        "time2": "Suécia",
        "score1": 5,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "20/06/2026",
        "time1": "Tunísia",
        "time2": "Japão",
        "score1": 0,
        "score2": 4,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "21/06/2026",
        "time1": "Uruguai",
        "time2": "Cabo Verde",
        "score1": 2,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "21/06/2026",
        "time1": "Espanha",
        "time2": "Arábia Saudita",
        "score1": 4,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "21/06/2026",
        "time1": "Bélgica",
        "time2": "Irã",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "21/06/2026",
        "time1": "Nova Zelândia",
        "time2": "Egito",
        "score1": 1,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "22/06/2026",
        "time1": "Noruega",
        "time2": "Senegal",
        "score1": 3,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "22/06/2026",
        "time1": "França",
        "time2": "Iraque",
        "score1": 3,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "22/06/2026",
        "time1": "Argentina",
        "time2": "Áustria",
        "score1": 2,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "22/06/2026",
        "time1": "Jordânia",
        "time2": "Argélia",
        "score1": 1,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "23/06/2026",
        "time1": "Inglaterra",
        "time2": "Gana",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "23/06/2026",
        "time1": "Panamá",
        "time2": "Croácia",
        "score1": 0,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "23/06/2026",
        "time1": "Portugal",
        "time2": "Uzbequistão",
        "score1": 5,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "23/06/2026",
        "time1": "Colômbia",
        "time2": "RD Congo",
        "score1": 1,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "24/06/2026",
        "time1": "Escócia",
        "time2": "Brasil",
        "score1": 0,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "24/06/2026",
        "time1": "Marrocos",
        "time2": "Haiti",
        "score1": 4,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo C"
    },
    {
        "data": "24/06/2026",
        "time1": "Suíça",
        "time2": "Canadá",
        "score1": 2,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "24/06/2026",
        "time1": "Bósnia e Herzegovina",
        "time2": "Catar",
        "score1": 3,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo B"
    },
    {
        "data": "24/06/2026",
        "time1": "Tchéquia",
        "time2": "México",
        "score1": 0,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "24/06/2026",
        "time1": "África do Sul",
        "time2": "Coreia do Sul",
        "score1": 1,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo A"
    },
    {
        "data": "25/06/2026",
        "time1": "Curaçau",
        "time2": "Costa do Marfim",
        "score1": 0,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "25/06/2026",
        "time1": "Equador",
        "time2": "Alemanha",
        "score1": 2,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo E"
    },
    {
        "data": "25/06/2026",
        "time1": "Japão",
        "time2": "Suécia",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "25/06/2026",
        "time1": "Tunísia",
        "time2": "Holanda",
        "score1": 1,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo F"
    },
    {
        "data": "25/06/2026",
        "time1": "Turquia",
        "time2": "EUA",
        "score1": 3,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "25/06/2026",
        "time1": "Paraguai",
        "time2": "Austrália",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo D"
    },
    {
        "data": "26/06/2026",
        "time1": "Noruega",
        "time2": "França",
        "score1": 1,
        "score2": 4,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "26/06/2026",
        "time1": "Senegal",
        "time2": "Iraque",
        "score1": 5,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo I"
    },
    {
        "data": "26/06/2026",
        "time1": "Egito",
        "time2": "Irã",
        "score1": 1,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "26/06/2026",
        "time1": "Nova Zelândia",
        "time2": "Bélgica",
        "score1": 1,
        "score2": 5,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo G"
    },
    {
        "data": "26/06/2026",
        "time1": "Cabo Verde",
        "time2": "Arábia Saudita",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "26/06/2026",
        "time1": "Uruguai",
        "time2": "Espanha",
        "score1": 0,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo H"
    },
    {
        "data": "27/06/2026",
        "time1": "Panamá",
        "time2": "Inglaterra",
        "score1": 0,
        "score2": 2,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "27/06/2026",
        "time1": "Croácia",
        "time2": "Gana",
        "score1": 2,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo L"
    },
    {
        "data": "27/06/2026",
        "time1": "Argélia",
        "time2": "Áustria",
        "score1": 3,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "27/06/2026",
        "time1": "Jordânia",
        "time2": "Argentina",
        "score1": 1,
        "score2": 3,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo J"
    },
    {
        "data": "27/06/2026",
        "time1": "Colômbia",
        "time2": "Portugal",
        "score1": 0,
        "score2": 0,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "27/06/2026",
        "time1": "RD Congo",
        "time2": "Uzbequistão",
        "score1": 3,
        "score2": 1,
        "fase": "Fase de Grupos",
        "detalhe": "Grupo K"
    },
    {
        "data": "28/06/2026",
        "time1": "África do Sul",
        "time2": "Canadá",
        "score1": 0,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "Jogo 73"
    },
    {
        "data": "29/06/2026",
        "time1": "Alemanha",
        "time2": "Paraguai",
        "score1": 1,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "pênaltis 3-4 • Jogo 74"
    },
    {
        "data": "29/06/2026",
        "time1": "Holanda",
        "time2": "Marrocos",
        "score1": 1,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "pênaltis 2-3 • Jogo 75"
    },
    {
        "data": "29/06/2026",
        "time1": "Brasil",
        "time2": "Japão",
        "score1": 2,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "Jogo 76"
    },
    {
        "data": "30/06/2026",
        "time1": "França",
        "time2": "Suécia",
        "score1": 3,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 77"
    },
    {
        "data": "30/06/2026",
        "time1": "Costa do Marfim",
        "time2": "Noruega",
        "score1": 1,
        "score2": 2,
        "fase": "32-avos de final",
        "detalhe": "Jogo 78"
    },
    {
        "data": "30/06/2026",
        "time1": "México",
        "time2": "Equador",
        "score1": 2,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 79"
    },
    {
        "data": "01/07/2026",
        "time1": "Inglaterra",
        "time2": "RD Congo",
        "score1": 2,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "Jogo 80"
    },
    {
        "data": "01/07/2026",
        "time1": "EUA",
        "time2": "Bósnia e Herzegovina",
        "score1": 2,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 81"
    },
    {
        "data": "01/07/2026",
        "time1": "Bélgica",
        "time2": "Senegal",
        "score1": 3,
        "score2": 2,
        "fase": "32-avos de final",
        "detalhe": "prorrogação • Jogo 82"
    },
    {
        "data": "02/07/2026",
        "time1": "Portugal",
        "time2": "Croácia",
        "score1": 2,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "Jogo 83"
    },
    {
        "data": "02/07/2026",
        "time1": "Espanha",
        "time2": "Áustria",
        "score1": 3,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 84"
    },
    {
        "data": "02/07/2026",
        "time1": "Suíça",
        "time2": "Argélia",
        "score1": 2,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 85"
    },
    {
        "data": "03/07/2026",
        "time1": "Argentina",
        "time2": "Cabo Verde",
        "score1": 3,
        "score2": 2,
        "fase": "32-avos de final",
        "detalhe": "prorrogação • Jogo 86"
    },
    {
        "data": "03/07/2026",
        "time1": "Colômbia",
        "time2": "Gana",
        "score1": 1,
        "score2": 0,
        "fase": "32-avos de final",
        "detalhe": "Jogo 87"
    },
    {
        "data": "03/07/2026",
        "time1": "Austrália",
        "time2": "Egito",
        "score1": 1,
        "score2": 1,
        "fase": "32-avos de final",
        "detalhe": "pênaltis 2-4 • Jogo 88"
    },
    {
        "data": "04/07/2026",
        "time1": "Paraguai",
        "time2": "França",
        "score1": 0,
        "score2": 1,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 89"
    },
    {
        "data": "04/07/2026",
        "time1": "Canadá",
        "time2": "Marrocos",
        "score1": 0,
        "score2": 3,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 90"
    },
    {
        "data": "05/07/2026",
        "time1": "Brasil",
        "time2": "Noruega",
        "score1": 1,
        "score2": 2,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 91"
    },
    {
        "data": "05/07/2026",
        "time1": "México",
        "time2": "Inglaterra",
        "score1": 2,
        "score2": 3,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 92"
    },
    {
        "data": "06/07/2026",
        "time1": "Portugal",
        "time2": "Espanha",
        "score1": 0,
        "score2": 1,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 93"
    },
    {
        "data": "06/07/2026",
        "time1": "EUA",
        "time2": "Bélgica",
        "score1": 1,
        "score2": 4,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 94"
    },
    {
        "data": "07/07/2026",
        "time1": "Argentina",
        "time2": "Egito",
        "score1": 3,
        "score2": 2,
        "fase": "Oitavas de final",
        "detalhe": "Jogo 95"
    },
    {
        "data": "07/07/2026",
        "time1": "Suíça",
        "time2": "Colômbia",
        "score1": 0,
        "score2": 0,
        "fase": "Oitavas de final",
        "detalhe": "pênaltis 4-3 • Jogo 96"
    },
    {
        "data": "09/07/2026",
        "time1": "França",
        "time2": "Marrocos",
        "score1": 2,
        "score2": 0,
        "fase": "Quartas de final",
        "detalhe": "Jogo 97"
    },
    {
        "data": "10/07/2026",
        "time1": "Espanha",
        "time2": "Bélgica",
        "score1": 2,
        "score2": 1,
        "fase": "Quartas de final",
        "detalhe": "Jogo 98"
    },
    {
        "data": "11/07/2026",
        "time1": "Noruega",
        "time2": "Inglaterra",
        "score1": 1,
        "score2": 2,
        "fase": "Quartas de final",
        "detalhe": "prorrogação • Jogo 99"
    },
    {
        "data": "11/07/2026",
        "time1": "Argentina",
        "time2": "Suíça",
        "score1": 3,
        "score2": 1,
        "fase": "Quartas de final",
        "detalhe": "prorrogação • Jogo 100"
    },
    {
        "data": "14/07/2026",
        "time1": "França",
        "time2": "Espanha",
        "score1": 0,
        "score2": 2,
        "fase": "Semifinal",
        "detalhe": "Jogo 101"
    },
    {
        "data": "15/07/2026",
        "time1": "Inglaterra",
        "time2": "Argentina",
        "score1": 1,
        "score2": 2,
        "fase": "Semifinal",
        "detalhe": "Jogo 102"
    },
    {
        "data": "18/07/2026",
        "time1": "França",
        "time2": "Inglaterra",
        "score1": 4,
        "score2": 6,
        "fase": "Disputa do 3º lugar",
        "detalhe": "Jogo 103"
    },
    {
        "data": "19/07/2026",
        "time1": "Espanha",
        "time2": "Argentina",
        "score1": 1,
        "score2": 0,
        "fase": "Final",
        "detalhe": "prorrogação • Jogo 104"
    }
];

const codigosBandeiras = {
    "Argentina": "ar",
    "Argélia": "dz",
    "Austrália": "au",
    "Áustria": "at",
    "Bélgica": "be",
    "Bósnia e Herzegovina": "ba",
    "Brasil": "br",
    "Canadá": "ca",
    "Cabo Verde": "cv",
    "Catar": "qa",
    "Colômbia": "co",
    "Costa do Marfim": "ci",
    "Croácia": "hr",
    "Curaçau": "cw",
    "Tchéquia": "cz",
    "Egito": "eg",
    "Equador": "ec",
    "Inglaterra": "gb-eng",
    "Espanha": "es",
    "EUA": "us",
    "França": "fr",
    "Gana": "gh",
    "Alemanha": "de",
    "Haiti": "ht",
    "Irã": "ir",
    "Iraque": "iq",
    "Jordânia": "jo",
    "Japão": "jp",
    "Coreia do Sul": "kr",
    "México": "mx",
    "Marrocos": "ma",
    "Holanda": "nl",
    "Nova Zelândia": "nz",
    "Noruega": "no",
    "Panamá": "pa",
    "Paraguai": "py",
    "Portugal": "pt",
    "Senegal": "sn",
    "Escócia": "gb-sct",
    "Arábia Saudita": "sa",
    "África do Sul": "za",
    "Suíça": "ch",
    "Suécia": "se",
    "Tunísia": "tn",
    "Turquia": "tr",
    "Uruguai": "uy",
    "Uzbequistão": "uz",
    "RD Congo": "cd"
};

const container = document.getElementById("table-container");

function normalizar(texto) {
    return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function bandeira(time) {
    const codigo = codigosBandeiras[time];
    return codigo
        ? `https://www.bandeirasnacionais.com/data/flags/emoji/facebook/256x256/${codigo}.png`
        : "";
}

function wikipedia(time) {
    const paginas = {
        "EUA": "Seleção_Norte-Americana_de_Futebol",
        "RD Congo": "Seleção_Democrática_do_Congo_de_Futebol",
        "Tchéquia": "Seleção_Tcheca_de_Futebol",
        "Cabo Verde": "Seleção_Cabo-Verdiana_de_Futebol",
        "Coreia do Sul": "Seleção_Sul-Coreana_de_Futebol",
        "Costa do Marfim": "Seleção_Costamarfinense_de_Futebol",
        "Curaçau": "Seleção_Curaçaulense_de_Futebol"
    };
    const pagina = paginas[time] || `Seleção_${time.replaceAll(" ", "_")}_de_Futebol`;
    return `https://pt.wikipedia.org/wiki/${encodeURIComponent(pagina)}`;
}

function carregarJogos(jogosFiltrados = jogos) {
    if (!container) return;

    container.innerHTML = "";
    const fragment = document.createDocumentFragment();
    let faseAtual = null;

    jogosFiltrados.forEach((jogo) => {
        if (jogo.fase !== faseAtual) {
            faseAtual = jogo.fase;
            const header = document.createElement("h2");
            header.className = "rodada-header";
            header.innerHTML = `⚽ ${jogo.fase}`;
            fragment.appendChild(header);
        }

        const card = document.createElement("div");
        card.className = "match-card";

        const detalhe = jogo.detalhe ? `<small class="match-detail">${jogo.detalhe}</small>` : "";
        const placar = `${jogo.score1} <span class="vs">X</span> ${jogo.score2}`;

        card.innerHTML = `
            <div class="match-date">${jogo.data}</div>
            <div class="teams-container">
                <div class="team-box">
                    <a href="${wikipedia(jogo.time1)}" target="_blank" rel="noopener noreferrer">
                        <img src="${bandeira(jogo.time1)}" alt="Bandeira de ${jogo.time1}" width="100">
                    </a>
                    <span>${jogo.time1}</span>
                </div>

                <div class="score-box">
                    ${placar}
                    ${detalhe}
                </div>

                <div class="team-box">
                    <a href="${wikipedia(jogo.time2)}" target="_blank" rel="noopener noreferrer">
                        <img src="${bandeira(jogo.time2)}" alt="Bandeira de ${jogo.time2}" width="100">
                    </a>
                    <span>${jogo.time2}</span>
                </div>
            </div>
        `;

        fragment.appendChild(card);
    });

    container.appendChild(fragment);
}

function configurarBusca() {
    const inputBusca = document.getElementById("search-input");
    if (!inputBusca) return;

    inputBusca.addEventListener("input", () => {
        const texto = normalizar(inputBusca.value.trim());

        const jogosFiltrados = jogos.filter((jogo) =>
            normalizar(jogo.time1).includes(texto) ||
            normalizar(jogo.time2).includes(texto) ||
            jogo.data.includes(texto) ||
            normalizar(jogo.fase).includes(texto)
        );

        if (jogosFiltrados.length === 0) {
            container.innerHTML = `<p class="no-results">Nenhum jogo encontrado para: ${inputBusca.value}</p>`;
            return;
        }

        carregarJogos(jogosFiltrados);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    carregarJogos();
    configurarBusca();
});
