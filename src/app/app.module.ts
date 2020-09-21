import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpHeaders } from "@angular/common/http";
import { Apollo, APOLLO_OPTIONS } from "apollo-angular";
import { HttpLinkModule, HttpLink } from "apollo-angular-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './@pages/characters/characters.component';
import { VotesComponent } from './@pages/votes/votes.component';
import { CardComponent } from './@core/components/card/card.component';
import { TruncatePipe } from './@core/pipes/truncate.pipe';
import { LoadingComponent } from './@core/components/loading/loading.component';
import { NavbarComponent } from './@core/components/navbar/navbar.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './@core/components/bar-chart/bar-chart.component';
import { split } from 'apollo-link';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { onError } from "@apollo/client/link/error";
import { setContext } from "@apollo/client/link/context";
import { ApolloLink } from '@apollo/client/core';
import { getOperationAST } from 'graphql';
@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    VotesComponent,
    CardComponent,
    TruncatePipe,
    LoadingComponent,
    NavbarComponent,
    BarChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpLinkModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [{
    provide: APOLLO_OPTIONS,
    useFactory: (httpLink: HttpLink) => {
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({
          uri: "https://breaking-bad-backend.herokuapp.com/graphql"
        })
      }
    },
    deps: [HttpLink]
  }],
  bootstrap: [AppComponent]
})
export class AppModule {


  
}