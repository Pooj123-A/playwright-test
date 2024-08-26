
import { test, expect } from "@playwright/experimental-ct-react";
import App2054 from "../example/App2054.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2054 />);
  await expect(component).toContainText("Learn React");
});
