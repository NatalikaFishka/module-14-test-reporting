@full
Feature: Header navigations

  @lang
  Scenario: Switch to English language
    Given I open "Home" page
    When I click on Glob icon on "Home" page and select "English" language
    Then "Home" page link is changed to "https://training.by/#!/Home?lang=en"

  @so
  @nav
  Scenario Outline: Navigation links
    Given I open "Home" page
    When I click on "<Navigation Link>" in the header
    Then "<New Page>" link opens

    Examples:
      | Navigation Link                 | New Page                                          |
      | СПИСОК ТРЕНИНГОВ | https://training.by/#!/TrainingList?lang=ru       |
      | О НАС                       | https://training.by/#!/About?lang=ru              |
      | НОВОСТИ                  | https://training.by/#!/News/Category/news?lang=ru |