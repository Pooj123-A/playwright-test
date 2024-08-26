
import { test, expect } from "@playwright/experimental-ct-react";
import App5 from "../example/App5.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App5 />);
  await expect(component).toContainText("Learn React");
});
