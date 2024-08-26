
import { test, expect } from "@playwright/experimental-ct-react";
import App660 from "../example/App660.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App660 />);
  await expect(component).toContainText("Learn React");
});
