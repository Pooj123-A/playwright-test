
import { test, expect } from "@playwright/experimental-ct-react";
import App111 from "./App111.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App111 />);
  await expect(component).toContainText("Learn React");
});
