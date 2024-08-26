
import { test, expect } from "@playwright/experimental-ct-react";
import App2013 from "../example/App2013.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2013 />);
  await expect(component).toContainText("Learn React");
});
