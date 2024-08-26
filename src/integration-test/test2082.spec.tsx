
import { test, expect } from "@playwright/experimental-ct-react";
import App2082 from "../example/App2082.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App2082 />);
  await expect(component).toContainText("Learn React");
});
