
import { test, expect } from "@playwright/experimental-ct-react";
import App641 from "../example/App641.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App641 />);
  await expect(component).toContainText("Learn React");
});
