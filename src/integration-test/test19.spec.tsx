
import { test, expect } from "@playwright/experimental-ct-react";
import App19 from "../example/App19.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App19 />);
  await expect(component).toContainText("Learn React");
});
