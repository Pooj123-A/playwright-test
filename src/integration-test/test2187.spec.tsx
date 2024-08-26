
import { test, expect } from "@playwright/experimental-ct-react";
import App2187 from "../example/App2187.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2187 />);
  await expect(component).toContainText("Learn React");
});
