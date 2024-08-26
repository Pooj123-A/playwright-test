
import { test, expect } from "@playwright/experimental-ct-react";
import App469 from "../example/App469.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App469 />);
  await expect(component).toContainText("Learn React");
});
