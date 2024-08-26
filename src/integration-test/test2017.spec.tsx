
import { test, expect } from "@playwright/experimental-ct-react";
import App2017 from "../example/App2017.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2017 />);
  await expect(component).toContainText("Learn React");
});
