
import { test, expect } from "@playwright/experimental-ct-react";
import App507 from "../example/App507.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App507 />);
  await expect(component).toContainText("Learn React");
});
