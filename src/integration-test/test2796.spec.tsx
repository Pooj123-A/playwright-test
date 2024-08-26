
import { test, expect } from "@playwright/experimental-ct-react";
import App2796 from "../example/App2796.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2796 />);
  await expect(component).toContainText("Learn React");
});
