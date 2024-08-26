
import { test, expect } from "@playwright/experimental-ct-react";
import App2922 from "../example/App2922.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2922 />);
  await expect(component).toContainText("Learn React");
});
