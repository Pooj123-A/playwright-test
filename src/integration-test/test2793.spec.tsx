
import { test, expect } from "@playwright/experimental-ct-react";
import App2793 from "../example/App2793.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2793 />);
  await expect(component).toContainText("Learn React");
});
