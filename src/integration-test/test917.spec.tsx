
import { test, expect } from "@playwright/experimental-ct-react";
import App917 from "../example/App917.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App917 />);
  await expect(component).toContainText("Learn React");
});
