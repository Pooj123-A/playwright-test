
import { test, expect } from "@playwright/experimental-ct-react";
import App583 from "../example/App583.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App583 />);
  await expect(component).toContainText("Learn React");
});
