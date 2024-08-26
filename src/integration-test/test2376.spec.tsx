
import { test, expect } from "@playwright/experimental-ct-react";
import App2376 from "../example/App2376.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2376 />);
  await expect(component).toContainText("Learn React");
});
