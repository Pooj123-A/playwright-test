
import { test, expect } from "@playwright/experimental-ct-react";
import App701 from "../example/App701.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App701 />);
  await expect(component).toContainText("Learn React");
});
