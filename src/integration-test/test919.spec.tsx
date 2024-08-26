
import { test, expect } from "@playwright/experimental-ct-react";
import App919 from "../example/App919.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App919 />);
  await expect(component).toContainText("Learn React");
});
