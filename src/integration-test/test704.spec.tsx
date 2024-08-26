
import { test, expect } from "@playwright/experimental-ct-react";
import App704 from "../example/App704.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App704 />);
  await expect(component).toContainText("Learn React");
});
