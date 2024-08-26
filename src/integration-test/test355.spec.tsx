
import { test, expect } from "@playwright/experimental-ct-react";
import App355 from "../example/App355.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App355 />);
  await expect(component).toContainText("Learn React");
});
