
import { test, expect } from "@playwright/experimental-ct-react";
import App360 from "../example/App360.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App360 />);
  await expect(component).toContainText("Learn React");
});
