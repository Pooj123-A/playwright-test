
import { test, expect } from "@playwright/experimental-ct-react";
import App2205 from "../example/App2205.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2205 />);
  await expect(component).toContainText("Learn React");
});
