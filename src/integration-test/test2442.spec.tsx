
import { test, expect } from "@playwright/experimental-ct-react";
import App2442 from "../example/App2442.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2442 />);
  await expect(component).toContainText("Learn React");
});
