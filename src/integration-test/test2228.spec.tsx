
import { test, expect } from "@playwright/experimental-ct-react";
import App2228 from "../example/App2228.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2228 />);
  await expect(component).toContainText("Learn React");
});
