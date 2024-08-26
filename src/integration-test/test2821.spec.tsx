
import { test, expect } from "@playwright/experimental-ct-react";
import App2821 from "../example/App2821.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2821 />);
  await expect(component).toContainText("Learn React");
});
