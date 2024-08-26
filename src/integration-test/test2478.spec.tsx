
import { test, expect } from "@playwright/experimental-ct-react";
import App2478 from "../example/App2478.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2478 />);
  await expect(component).toContainText("Learn React");
});
