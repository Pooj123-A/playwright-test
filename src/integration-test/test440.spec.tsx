
import { test, expect } from "@playwright/experimental-ct-react";
import App440 from "../example/App440.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App440 />);
  await expect(component).toContainText("Learn React");
});
