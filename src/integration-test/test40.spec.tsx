
import { test, expect } from "@playwright/experimental-ct-react";
import App40 from "../example/App40.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App40 />);
  await expect(component).toContainText("Learn React");
});
