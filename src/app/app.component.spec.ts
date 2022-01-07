import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonService } from './person.service';
import { PersonsComponent } from './persons/persons.component';


describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        HttpClientModule,
        MatCardModule
      ],
      declarations: [
        AppComponent,
        PersonsComponent
      ],
    }).compileComponents();
  });
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'ricky-and-morty'`, () => {
    expect(component.title).toEqual('ricky-and-morty');
  });

  it('should have a variable person equals to ricky', () => {
    expect(component.person).toEqual('ricky')
  })

  it('should render title', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.title')?.textContent).toContain('ricky-and-morty');
  });
  it('should class iquals to toolbar',()=>{
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.menu')?.firstChild?.textContent).toContain('persons')
  })
});
