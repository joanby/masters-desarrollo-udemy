auto <- read.csv("../data/tema1/auto-mpg.csv", 
                 header = TRUE, sep = ",",
                 strings.na = "",
                 stringsAsFactors = FALSE)
names(auto)

#read.csv2 == read.csv("filename", sep = ";", dec = ",")
# sep = "\t" (¡¡¡En el vídeo me olvidé la barra!!!)

auto_no_header <- read.csv("../data/tema1/auto-mpg-noheader.csv", header = FALSE)
head(auto_no_header, 4)

auto_no_sense <- read.csv("../data/tema1/auto-mpg-noheader.csv")
head(auto_no_sense, 4)

auto_custom_header <- 
  read.csv("../data/tema1/auto-mpg-noheader.csv",
           header = F, 
           col.names = c("numero", "millas_por_galeon", "cilindrada", 
                         "desplazamiento", "caballos_de_potencia", 
                         "peso", "aceleracion", "año", "modelo"
                         )
           )
head(auto_custom_header, 2)


who_from_internet <- read.csv("https://frogames.es/course-contents/r/intro/tema1/WHO.csv")

#NA : not available 
#na.strings=""
#as.character()