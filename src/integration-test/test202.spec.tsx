
import { test, expect } from "@playwright/experimental-ct-react";
import App202 from "../example/App202.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App202 />);
  await expect(component).toContainText("Learn React");
});
