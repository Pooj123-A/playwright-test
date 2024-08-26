
import { test, expect } from "@playwright/experimental-ct-react";
import App1444 from "../example/App1444.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1444 />);
  await expect(component).toContainText("Learn React");
});
