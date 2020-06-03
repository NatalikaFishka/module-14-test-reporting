@smoke
@full
Feature: Page titles

  @so
  Scenario Outline: Title of <PageName> page
    Given I open "<PageName>" page
    Then Title of "<PageName>" page is: "<Title>"

    Examples:
      | PageName  | Title                                                                                                                                                                                         |
      | Home      | Тренинг-центр EPAM в Беларуси - программы обучения для студентов, а также тех, кто хочет начать карьеру в IT |
      | Trainings | Бесплатные тренинги EPAM                                                                                                                                                    |
      | About Us  | О тренинг-центре EPAM                                                                                                                                                           |

