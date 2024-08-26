
import { test, expect } from "@playwright/experimental-ct-react";
import App2278 from "../example/App2278.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2278 />);
  await expect(component).toContainText("Learn React");
});
