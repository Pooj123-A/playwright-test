
import { test, expect } from "@playwright/experimental-ct-react";
import App1107 from "../example/App1107.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1107 />);
  await expect(component).toContainText("Learn React");
});
