
import { test, expect } from "@playwright/experimental-ct-react";
import App821 from "../example/App821.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App821 />);
  await expect(component).toContainText("Learn React");
});
