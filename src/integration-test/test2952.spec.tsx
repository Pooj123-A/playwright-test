
import { test, expect } from "@playwright/experimental-ct-react";
import App2952 from "../example/App2952.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2952 />);
  await expect(component).toContainText("Learn React");
});
