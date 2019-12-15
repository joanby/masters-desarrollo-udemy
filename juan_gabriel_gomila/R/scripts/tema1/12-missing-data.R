housing.data <- read.csv("../data/tema1/housing-with-missing-value.csv",
                         header = TRUE, stringsAsFactors = FALSE)


summary(housing.data)

##ELiminar todas las observaciones que contengan algún NA
housing.data.1 <- na.omit(housing.data)
summary(housing.data.1)

##Eliminar las NAs de ciertas columnas
drop_na <- c("rad")
housing.data.2 <- housing.data[ 
  complete.cases(housing.data[,!(names(housing.data))%in% drop_na]),]

summary(housing.data.2)

##Eliminar toda una columna
housing.data$rad <- NULL
summary(housing.data)

drops <- c("rad", "ptratio")
housing.data.3 <- housing.data[,!(names(housing.data) %in% drops)]
summary(housing.data.3)


install.packages("Hmisc")
library(Hmisc)

housing.data.copy1 <- housing.data
housing.data.copy1$ptratio <- impute(housing.data.copy1$ptratio, mean)
housing.data.copy1$rad <- impute(housing.data.copy1$rad, mean)
summary(housing.data.copy1)

housing.data.copy2 <- housing.data
housing.data.copy2$ptratio <- impute(housing.data.copy2$ptratio, median)
housing.data.copy2$rad <- impute(housing.data.copy2$rad, median)
summary(housing.data.copy2)

housing.data.copy3 <- housing.data
housing.data.copy3$ptratio <- impute(housing.data.copy3$ptratio, 18)
housing.data.copy3$rad <- impute(housing.data.copy3$rad, 7)
summary(housing.data.copy3)


install.packages("mice")
library(mice)
md.pattern(housing.data)


install.packages("VIM")
library(VIM)

aggr(housing.data,
     col= c('green', 'red'),
     numbers = TRUE, 
     sortVars = TRUE,
     labels = names(housing.data),
     cex.axis = 0.75,
     gap = 1,
     ylab = c("Histograma de NAs", "Patrón")
)     
