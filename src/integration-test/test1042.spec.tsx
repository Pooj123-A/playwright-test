
import { test, expect } from "@playwright/experimental-ct-react";
import App1042 from "../example/App1042.tsx";

test("should work", async ({ mount }) => {
  const component = await mount(<App1042 />);
  await expect(component).toContainText("Learn React");
});
