
import { test, expect } from "@playwright/experimental-ct-react";
import App718 from "../example/App718.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App718 />);
  await expect(component).toContainText("Learn React");
});
