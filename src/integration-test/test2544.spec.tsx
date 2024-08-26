
import { test, expect } from "@playwright/experimental-ct-react";
import App2544 from "../example/App2544.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2544 />);
  await expect(component).toContainText("Learn React");
});
