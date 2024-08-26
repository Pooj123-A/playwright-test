
import { test, expect } from "@playwright/experimental-ct-react";
import App2701 from "../example/App2701.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2701 />);
  await expect(component).toContainText("Learn React");
});
