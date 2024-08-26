
import { test, expect } from "@playwright/experimental-ct-react";
import App2867 from "../example/App2867.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2867 />);
  await expect(component).toContainText("Learn React");
});
