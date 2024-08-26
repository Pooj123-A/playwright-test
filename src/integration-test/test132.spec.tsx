
import { test, expect } from "@playwright/experimental-ct-react";
import App132 from "../example/App132.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App132 />);
  await expect(component).toContainText("Learn React");
});
